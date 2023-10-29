package ua.lpnu.lemoncat.iwnil.services;

import jssc.SerialPortException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.lpnu.lemoncat.iwnil.serial.SerialBuffer;
import ua.lpnu.lemoncat.iwnil.serial.SerialCommunicator;

@Service
@RequiredArgsConstructor
public class Task1Service {

    private final SerialCommunicator serialCommunicator;
    private final SerialBuffer serialBuffer;

    public String sendMessage(String message) throws SerialPortException, InterruptedException {

        serialCommunicator.sendMessage(message);
        Thread.sleep(100);
        return serialBuffer.pop();
    }
}