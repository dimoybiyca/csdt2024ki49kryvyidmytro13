package ua.lpnu.lemoncat.iwnil.serial;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@Log4j2
public class SerialBuffer {

    ArrayList<String> buffer = new ArrayList<>();


    public void push(String message) {
        log.info("message " + message);
        this.buffer.add(message);
        log.info(buffer.toString());
    }

    public String pop() throws InterruptedException {
        while(buffer.isEmpty()) {
            Thread.sleep(10);
        }
        String mes = buffer.get(0);
        buffer.clear();
        return mes;
    }
}
