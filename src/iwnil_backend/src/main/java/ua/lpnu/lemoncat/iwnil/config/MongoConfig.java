package ua.lpnu.lemoncat.iwnil.config;

//@Configuration
//public class MongoConfig extends AbstractMongoClientConfiguration {
//
//    @Override
//    @NonNull
//    protected String getDatabaseName() {
//        return "test";
//    }
//
//    @Override
//    @NonNull
//    public MongoClient mongoClient() {
//        ConnectionString connectionString = new ConnectionString("mongodb://localhost:27017/test");
//        MongoClientSettings mongoClientSettings = MongoClientSettings.builder()
//                .applyConnectionString(connectionString)
//                .build();
//
//        return MongoClients.create(mongoClientSettings);
//    }
//
//    @Override
//    @NonNull
//    public Collection getMappingBasePackages() {
//        return Collections.singleton("com.baeldung");
//    }
//}
