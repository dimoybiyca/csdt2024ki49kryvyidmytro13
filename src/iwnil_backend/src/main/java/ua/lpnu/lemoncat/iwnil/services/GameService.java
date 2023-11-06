package ua.lpnu.lemoncat.iwnil.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import ua.lpnu.lemoncat.iwnil.DTO.GameDTO;
import ua.lpnu.lemoncat.iwnil.converters.GameConverter;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;
import ua.lpnu.lemoncat.iwnil.model.Game;

import javax.xml.bind.JAXBException;

@Service
@Log4j2
@RequiredArgsConstructor
public class GameService {
    private final GameConverter converter;
    private final GameProcessor gameProcessor;

    public Game newGame() {
        int[][] arr = new int[10][10];

        for(int[] ints : arr) {
            for(int anInt : ints) {
                anInt = 0;
            }
        }

        return Game.builder()
                .gameStatus(GameStatus.IN_PROGRES)
                .firstPlayer("MAN")
                .secondPlayer("MAN")
                .nextMove(1)
                .board(arr)
                .build();
    }

    public Game move(Game game) {

        return gameProcessor.process(game);
    }

    public void newGameTest() throws JAXBException {
        String[] twoDArray = new String[10];

        for(int i = 0; i < 10; i++) {
            twoDArray[i] = String.valueOf(i);
        }
        GameDTO game = new GameDTO("MAN", "MAN", 1, GameStatus.NEW, twoDArray);

        String xml = converter.objectToXml(game);
        log.info("XML Representation: {}", xml);

        GameDTO game2 = converter.xmlToObject(xml);
        log.info("Game2: {}", game2);
    }
}