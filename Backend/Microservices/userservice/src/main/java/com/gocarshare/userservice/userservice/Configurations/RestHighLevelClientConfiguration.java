package com.gocarshare.userservice.userservice.Configurations;

import org.springframework.stereotype.Component;

@Component
public class RestHighLevelClientConfiguration {

//    @Bean
//    public RestHighLevelClient configure(){
//
//        BasicCredentialsProvider credentialsProvider = new BasicCredentialsProvider();
//        credentialsProvider.setCredentials(AuthScope.ANY,
//                new UsernamePasswordCredentials("site", "6c278b887d2ab5c466c69ada5fcc36c8"));
//        RestClientBuilder restClient = RestClient.builder(HttpHost.create("oin-us-east-1.searchly.com"))
//                .setHttpClientConfigCallback(httpClientBuilder -> httpClientBuilder.setDefaultCredentialsProvider(credentialsProvider));
//        return new RestHighLevelClient(restClient);
//
////        RestHighLevelClient client = new RestHighLevelClient(
////                RestClient.builder(
////                        new HttpHost("https://site:6c278b887d2ab5c466c69ada5fcc36c8@oin-us-east-1.searchly.com")
////                )
////        );
//    }
}
