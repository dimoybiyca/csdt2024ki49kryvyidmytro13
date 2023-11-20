package ua.lpnu.lemoncat.iwnil.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ua.lpnu.lemoncat.iwnil.model.Save;

@Repository
public interface SaveRepository extends MongoRepository<Save, String> {

}
