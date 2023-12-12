package ua.lpnu.lemoncat.iwnil.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;
import ua.lpnu.lemoncat.iwnil.model.Game;
import ua.lpnu.lemoncat.iwnil.model.Save;
import ua.lpnu.lemoncat.iwnil.repository.SaveRepository;
import ua.lpnu.lemoncat.iwnil.services.SaveService;

@ExtendWith({SpringExtension.class, MockitoExtension.class})
@TestConfiguration
public class SaveServiceTest {

    @TestConfiguration
    static class GameServiceTestConfiguration {
        @Bean
        public SaveService stateService(SaveRepository saveRepository) {
            return new SaveService(saveRepository);
        }
    }

    @MockBean
    private SaveRepository saveRepository;

    @Autowired
    private SaveService saveService;

    @Test
    public void createSaveTest() {
        Save expected = createSave("MAN", "MAN", AIType.RANDOM);
        Mockito.when(saveRepository.save(Mockito.any(Save.class))).thenReturn(expected);

        Save actual = saveService.create(Game.builder()
                .firstPlayer("MAN")
                .secondPlayer("MAN")
                .gameStatus(GameStatus.IN_PROGRES)
                .aiType(AIType.RANDOM)
                .nextMove(1)
                .board(new int[10][10])
                .build());

        Assertions.assertEquals(expected, actual);
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
