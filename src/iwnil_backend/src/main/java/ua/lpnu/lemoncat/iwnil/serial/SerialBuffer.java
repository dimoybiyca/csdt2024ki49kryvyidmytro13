package ua.lpnu.lemoncat.iwnil.serial;

import lombok.extern.log4j.Log4j2;
import org.apache.tomcat.util.collections.SynchronizedQueue;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class SerialBuffer {

    SynchronizedQueue<String> buffer = new SynchronizedQueue<>();

    public void push(String message) {
        log.info("message " + message);
        this.buffer.offer(message);
        log.info(buffer.toString());
    }

    public String pop() throws InterruptedException {
        while(buffer.size() == 0) {
            Thread.sleep(30);
        }
        String mes = buffer.poll();
        buffer.clear();
        return mes;
    }
}
