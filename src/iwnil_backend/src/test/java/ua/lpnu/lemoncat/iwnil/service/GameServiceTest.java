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
import ua.lpnu.lemoncat.iwnil.converters.GameConverter;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;
import ua.lpnu.lemoncat.iwnil.model.Game;
import ua.lpnu.lemoncat.iwnil.serial.SerialBuffer;
import ua.lpnu.lemoncat.iwnil.serial.SerialCommunicator;
import ua.lpnu.lemoncat.iwnil.services.GameService;

import javax.xml.bind.JAXBException;
import java.util.Arrays;

@ExtendWith({SpringExtension.class, MockitoExtension.class})
@TestConfiguration
public class GameServiceTest {

    @MockBean
    private SerialCommunicator serialCommunicator;

    @MockBean
    private SerialBuffer serialBuffer;

    @TestConfiguration
    static class GameServiceTestConfiguration {
        @Bean
        public GameService stateService(SerialCommunicator serialCommunicator, SerialBuffer serialBuffer) {
            return new GameService(new GameConverter(), serialCommunicator, serialBuffer);
        }
    }

    @Autowired
    private GameService gameService;

    @Test
    public void newGameTest() throws InterruptedException, JAXBException {
        int[][] board = new int[3][3];
        Arrays.stream(board).forEach(arr -> Arrays.stream(arr).forEach(val -> val = 0));
        Game expected = Game.builder()
                .firstPlayer("MAN")
                .secondPlayer("MAN")
                .gameStatus(GameStatus.IN_PROGRES)
                .aiType(AIType.RANDOM)
                .nextMove(1)
                .board(board)
                .build();

        Mockito.when(serialBuffer.pop()).thenReturn("[Pico] <gameDTO><rows>3</rows><cols>3</cols><aiType>RANDOM</aiType><board>000000000</board><firstPlayer>MAN</firstPlayer><gameStatus>IN_PROGRES</gameStatus><nextMove>1</nextMove><secondPlayer>MAN</secondPlayer></gameDTO>");

        Game actual = gameService.picoNewGame("MAN", "MAN", AIType.RANDOM);

        Assertions.assertEquals(expected, actual);
    }

    @Test
    public void moveTest() throws InterruptedException, JAXBException {
        int[][] board = new int[3][3];
        Arrays.stream(board).forEach(arr -> Arrays.stream(arr).forEach(val -> val = 0));
        Game expected = Game.builder()
                .firstPlayer("MAN")
                .secondPlayer("MAN")
                .gameStatus(GameStatus.IN_PROGRES)
                .aiType(AIType.RANDOM)
                .nextMove(1)
                .board(board)
                .build();

        Mockito.when(serialBuffer.pop()).thenReturn("[Pico] <gameDTO><rows>3</rows><cols>3</cols><aiType>RANDOM</aiType><board>000000000</board><firstPlayer>MAN</firstPlayer><gameStatus>IN_PROGRES</gameStatus><nextMove>1</nextMove><secondPlayer>MAN</secondPlayer></gameDTO>");

        Game actual = gameService.picoMove(expected);

        Assertions.assertEquals(expected, actual);
    }

    @Test
    public void moveTestAIRandom() throws InterruptedException, JAXBException {
        int[][] board = new int[3][3];
        Arrays.stream(board).forEach(arr -> Arrays.stream(arr).forEach(val -> val = 0));
        Game expected = Game.builder()
                .firstPlayer("AI")
                .secondPlayer("AI")
                .gameStatus(GameStatus.IN_PROGRES)
                .aiType(AIType.RANDOM)
                .nextMove(1)
                .board(board)
                .build();

        Mockito.when(serialBuffer.pop()).thenReturn("[Pico] <gameDTO><rows>3</rows><cols>3</cols><aiType>RANDOM</aiType><board>000000000</board><firstPlayer>AI</firstPlayer><gameStatus>IN_PROGRES</gameStatus><nextMove>1</nextMove><secondPlayer>AI</secondPlayer></gameDTO>");

        Game actual = gameService.picoMove(expected);

        Assertions.assertEquals(expected, actual);
    }

    @Test
    public void moveTestAIBestMove() throws InterruptedException, JAXBException {
        int[][] board = new int[3][3];
        Arrays.stream(board).forEach(arr -> Arrays.stream(arr).forEach(val -> val = 0));
        Game expected = Game.builder()
                .firstPlayer("AI")
                .secondPlayer("AI")
                .gameStatus(GameStatus.IN_PROGRES)
                .aiType(AIType.BEST_MOVE)
                .nextMove(1)
                .board(board)
                .build();

        Mockito.when(serialBuffer.pop()).thenReturn("[Pico] <gameDTO><rows>3</rows><cols>3</cols><aiType>BEST_MOVE</aiType><board>000000000</board><firstPlayer>AI</firstPlayer><gameStatus>IN_PROGRES</gameStatus><nextMove>1</nextMove><secondPlayer>AI</secondPlayer></gameDTO>");

        Game actual = gameService.picoMove(expected);

        Assertions.assertEquals(expected, actual);
    }
}
