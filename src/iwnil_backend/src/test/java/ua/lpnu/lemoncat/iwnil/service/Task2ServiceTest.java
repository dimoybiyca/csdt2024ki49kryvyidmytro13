package ua.lpnu.lemoncat.iwnil.service;

import jssc.SerialPortException;
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
import ua.lpnu.lemoncat.iwnil.serial.SerialBuffer;
import ua.lpnu.lemoncat.iwnil.serial.SerialCommunicator;
import ua.lpnu.lemoncat.iwnil.services.Task2Service;

@ExtendWith({SpringExtension.class, MockitoExtension.class})
@TestConfiguration
public class Task2ServiceTest {

    @MockBean
    private SerialCommunicator serialCommunicator;

    @MockBean
    private SerialBuffer serialBuffer;

    @TestConfiguration
    static class Task2ServiceTestConfiguration {
        @Bean
        public Task2Service stateService(SerialCommunicator serialCommunicator, SerialBuffer serialBuffer) {
            return new Task2Service(serialCommunicator, serialBuffer);
        }
    }

    @Autowired
    private Task2Service task2Service;

    @Test
    public void sendMessageTest() throws SerialPortException, InterruptedException {
        String expected = "[Pico] message";
        Mockito.when(serialBuffer.pop()).thenReturn(expected);

        String actual = task2Service.sendMessage("message");

        Assertions.assertEquals(expected, actual);
    }
}
