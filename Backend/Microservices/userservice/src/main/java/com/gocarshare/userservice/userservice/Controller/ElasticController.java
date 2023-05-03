package com.gocarshare.userservice.userservice.Controller;


import com.gocarshare.userservice.userservice.Services.ElasticsearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search")
public class ElasticController {

    @Autowired
    private ElasticsearchService elasticsearchService;
    @GetMapping("")
    public Object search(@RequestParam String q){
        return elasticsearchService.search(q);
    }
}
