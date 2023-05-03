package com.gocarshare.authserver.Controllers;


import com.gocarshare.authserver.Service.ElasticsearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
@RequestMapping("/search")
@CrossOrigin(origins = "*")
public class ElasticController {

    @Autowired
    private ElasticsearchService elasticsearchService;
    @GetMapping("")
    public Object search(@RequestParam String q){
        return elasticsearchService.search(q);
    }
}
