package ua.lpnu.lemoncat.iwnil.serial;

import jssc.SerialPort;
import jssc.SerialPortEvent;
import jssc.SerialPortEventListener;
import jssc.SerialPortException;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class PortReader implements SerialPortEventListener {

    private final SerialPort serialPort;
    private final SerialBuffer serialBuffer;

    StringBuilder sb = new StringBuilder();

    public PortReader(SerialPort serialPort, SerialBuffer serialBuffer) {
        this.serialPort = serialPort;
        this.serialBuffer = serialBuffer;
    }

    @Override
    public void serialEvent(SerialPortEvent event) {
        if(event.isRXCHAR() && event.getEventValue() > 0) {
            try {
                String receivedData = serialPort.readString(event.getEventValue());
                if(receivedData.contains("%")) {
                    sb = new StringBuilder("");
                    sb.append(receivedData.substring(receivedData.indexOf("%")));
                } else {
                    sb.append(receivedData);
                }

                log.info("Received {}", receivedData);
                if(receivedData.contains("&")) {
                    log.info("sb {}", sb.toString());
                    String newMessage = sb.toString();
                    serialBuffer.push(newMessage.substring(1, sb.indexOf("&")));
                }

            } catch(SerialPortException e) {
                e.printStackTrace();
            }
        }
    }
}
