package ua.lpnu.lemoncat.iwnil.repository;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;
import ua.lpnu.lemoncat.iwnil.model.Save;

import java.util.ArrayList;
import java.util.List;

@DataMongoTest
@TestConfiguration
@ExtendWith(SpringExtension.class)
public class SavesRepositoryTest {
    @Autowired
    SaveRepository saveRepository;

    @AfterEach
    public void trunacate() {
        saveRepository.deleteAll();
    }

    @Test
    public void newSaveTest() {
        Save expected = createSave("MAN", "MAN", AIType.RANDOM);

        saveRepository.save(expected);
        Save actual = saveRepository.findAll().get(0);

        Assertions.assertEquals(expected, actual);
    }

    @Test
    public void newSaveAIRandomTest() {
        Save expected = createSave("AI", "AI", AIType.RANDOM);

        saveRepository.save(expected);
        Save actual = saveRepository.findAll().get(0);

        Assertions.assertEquals(expected, actual);
    }

    @Test
    public void newSaveAIBestMoveTest() {
        Save expected = createSave("AI", "AI", AIType.BEST_MOVE);

        saveRepository.save(expected);
        Save actual = saveRepository.findAll().get(0);

        Assertions.assertEquals(expected, actual);
    }

    @Test
    public void deleteSaveTest() {
        Save expected = createSave("MAN", "MAN", AIType.RANDOM);
        saveRepository.save(expected);
        Save actual = saveRepository.findAll().get(0);
        Assertions.assertEquals(expected, actual);

        saveRepository.deleteById(actual.getId());
        Assertions.assertEquals(0, saveRepository.findAll().size());
    }

    @Test
    public void findAllTest() {
        List<Save> expected = new ArrayList<>();
        for(int i = 0; i < 10; i++) {
            expected.add(createSave("MAN", "MAN", AIType.RANDOM));
        }
        saveRepository.saveAll(expected);

        Assertions.assertEquals(10, saveRepository.findAll().size());
    }

    private Save createSave(String fp, String sp, AIType ait) {
        return Save.builder()
                .firstPlayer(fp)
                .secondPlayer(sp)
                .gameStatus(GameStatus.IN_PROGRES)
                .aiType(ait)
                .nextMove(1)
                .board(new int[10][10])
                .build();
    }
}
