package com.gocarshare.authserver.Service;


import com.gocarshare.authserver.Configurations.RestUtil;
import com.gocarshare.authserver.Modal.CarSearchResult;
import com.gocarshare.authserver.Modal.SearchResponse;
import org.bson.Document;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ElasticsearchService {

    public SearchResponse search(String query){

        int year = extractYear(query);

        Document multiMatch = new Document();

        Document multiMatchQuery = new Document();
        multiMatchQuery.append("query", query)
                .append("fields", Arrays.asList("make^2", "model", "body_styles^1"))
                .append("type", "best_fields")
                .append("fuzziness", "AUTO");

        multiMatch.append("multi_match", multiMatchQuery);

        List<Document> mustArray = new ArrayList<>();
        mustArray.add(multiMatch);

        if(year > 0) {
            Document yearMatch = new Document().append("match", new Document("year", year));
            mustArray.add(yearMatch);
        }

        Document boolQuery = new Document().append("bool", new Document("must", mustArray));

        Document skeletonQuery = new Document();
        skeletonQuery.append("query", boolQuery);
        System.out.println(skeletonQuery);
//        return  skeletonQuery.toJson();


        String userName = "site";
        String password = "6c278b887d2ab5c466c69ada5fcc36c8";
        String url = "https://oin-us-east-1.searchly.com/car_inventory/_search";

       LinkedHashMap response = (LinkedHashMap) RestUtil.post(url, skeletonQuery.toJson(), Object.class, userName, password);

       return processRequest(response);
    }

    public SearchResponse processRequest(LinkedHashMap map){

        JSONObject resp = new JSONObject();
        LinkedHashMap all_hits = (LinkedHashMap) map.get("hits");

        List<LinkedHashMap<String, Object>> hits = (List<LinkedHashMap<String, Object>>) all_hits.get("hits");

        List<CarSearchResult> cars = new ArrayList<>();

        for (LinkedHashMap<String, Object> hit : hits) {

            LinkedHashMap<String, Object> source = (LinkedHashMap<String, Object>) hit.get("_source");

            // Access individual fields of the source object as follows
            int year = (Integer) source.get("year");
            String make = (String) source.get("make");
            String model = (String) source.get("model");
            List<String> bodyStyles = (List<String>) source.get("body_styles");
            String modelId = (String) source.get("model_id");

            CarSearchResult car = CarSearchResult.builder()
                    .body_styles(bodyStyles)
                    .model_id(modelId)
                    .model(model)
                    .make(make)
                    .year(year).build();

            cars.add(car);
        }

        return new SearchResponse(cars);
    }

    public int extractYear(String query){

        Pattern pattern = Pattern.compile("\\d{4}");
        Matcher matcher = pattern.matcher(query);
        int year = 0;

        // Find the year in the search query
        if (matcher.find()) {
             year = Integer.valueOf(matcher.group());
            System.out.println("Year found in search query: " + year);
        } else {
            System.out.println("Year not found in search query");
        }

        if(year > 1950 && year < 2025){
            return year;
        }
        return  0;
    }
}
