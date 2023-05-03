FROM adoptopenjdk/openjdk11
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY ./build/libs/userservice-0.0.1-SNAPSHOT-plain.jar /usr/app/app.jar
CMD ["java", "-jar", "app.jar"]
