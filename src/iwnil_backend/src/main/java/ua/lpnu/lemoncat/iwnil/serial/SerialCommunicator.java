package ua.lpnu.lemoncat.iwnil.serial;

import jssc.SerialPort;
import jssc.SerialPortException;
import org.springframework.stereotype.Component;

@Component
public class SerialCommunicator {
    ConnectionMonitor connectionMonitor;
    SerialPort serialPort;
    SerialBuffer serialBuffer;
    PortReader portReader;


    public SerialCommunicator(SerialBuffer serialBuffer) throws SerialPortException {
        this.serialBuffer = serialBuffer;
        this.connectionMonitor = new ConnectionMonitor(serialBuffer);
        this.connectionMonitor.start();
        serialPort = connectionMonitor.getSerialPort();
        portReader = new PortReader(serialPort, serialBuffer);
        serialPort.addEventListener(portReader, SerialPort.MASK_RXCHAR);
    }

    public void sendMessage(String message) throws SerialPortException {
        this.serialPort.writeString(message + ";");
    }
}
