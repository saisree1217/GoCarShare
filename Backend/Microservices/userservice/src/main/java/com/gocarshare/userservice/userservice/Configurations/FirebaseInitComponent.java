package com.gocarshare.userservice.userservice.Configurations;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;

@Component
public class FirebaseInitComponent {

    @Autowired
    private ResourceLoader resourceLoader;

    @PostConstruct
    public void initFirebase() throws IOException {

       Resource resource = resourceLoader.getResource("classpath:key.json");
       InputStream inputStream = resource.getInputStream();


        System.out.println(inputStream.toString());
        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(inputStream))
                .build();

         FirebaseApp.initializeApp(options);
    }

    @Bean
    public Firestore fireStoreInit(){
        return FirestoreClient.getFirestore();
    }

    @Bean
    public FirebaseAuth firebaseAuth() {return  FirebaseAuth.getInstance();}

}
