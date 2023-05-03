package com.gocarshare.userservice.userservice.Services;

import com.gocarshare.userservice.userservice.Exception.ExceptionResponse;
import com.gocarshare.userservice.userservice.Modal.User;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    @Autowired private MongoTemplate mongoTemplate;
//
//    @Autowired private RestHighLevelClient client;


    public User getUserDetails(String uid){
        Query query = Query.query(Criteria.where("_id").is(uid));

        User user = mongoTemplate.findOne(query, User.class);

        if(user == null){
            throw new ExceptionResponse(HttpStatus.NOT_FOUND.value(), "User not found");
        }

        return user;
    }

    public Object setUserType(String userId, String userType){

        Query query = Query.query(Criteria.where("_id").is(userId));

        Update update = new Update();
        update.set("userType", userType);

        UpdateResult result  =mongoTemplate.updateFirst(query, update, User.class, "Users");

        Map<String, String> resp = new HashMap<>();
        if(result.getModifiedCount() > 0){
            resp.put("message", "updated");
            return  resp;
        }
        throw  new ExceptionResponse(406, "Bad Request");
    }

//    public void clinet() throws IOException {
//        CreateIndexRequest request = new CreateIndexRequest("articles");
//        RequestOptions requestOptions = RequestOptions.DEFAULT;
//        CreateIndexResponse createIndexResponse = client.indices().create(request, requestOptions);
//
//
//
//    }
}
