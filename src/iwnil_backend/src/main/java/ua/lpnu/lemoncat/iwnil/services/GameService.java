package ua.lpnu.lemoncat.iwnil.services;

import jssc.SerialPortException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import ua.lpnu.lemoncat.iwnil.DTO.GameDTO;
import ua.lpnu.lemoncat.iwnil.DTO.NewGameDTO;
import ua.lpnu.lemoncat.iwnil.converters.GameConverter;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.model.Game;
import ua.lpnu.lemoncat.iwnil.serial.SerialBuffer;
import ua.lpnu.lemoncat.iwnil.serial.SerialCommunicator;

import javax.xml.bind.JAXBException;

@Service
@Log4j2
@RequiredArgsConstructor
public class GameService {
    private final GameConverter converter;
    private final SerialCommunicator serialCommunicator;
    private final SerialBuffer serialBuffer;

    public Game picoMove(Game game) throws JAXBException {
        GameDTO gameDTO = converter.toDTO(game);
        String xml = converter.objectToXml(gameDTO);
        System.out.println(xml);

        return sendToPico(xml);
    }

    public Game picoNewGame(String firstPlayer, String secondPlayer, AIType aiType) throws JAXBException {
        NewGameDTO dto = NewGameDTO.builder()
                .firstPlayer(firstPlayer)
                .secondPlayer(secondPlayer)
                .aiType(aiType)
                .build();
        String xml = converter.objectToXml(dto);
        System.out.println(xml);

        return sendToPico(xml);
    }

    private Game sendToPico(String xml) {
        try {
            serialCommunicator.sendMessage(xml);

            String responseStr = serialBuffer.pop().substring(6);
            System.out.println(responseStr);
            GameDTO response = converter.xmlToObject(responseStr);
            System.out.print("response " + response);
            return converter.toObject(response);
        } catch(JAXBException | SerialPortException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}