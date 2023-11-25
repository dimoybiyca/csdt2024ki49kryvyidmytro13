package ua.lpnu.lemoncat.iwnil.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import ua.lpnu.lemoncat.iwnil.data.AIType;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Builder
@XmlRootElement
@NoArgsConstructor
@AllArgsConstructor
public class NewGameDTO {
    private String firstPlayer;
    private String secondPlayer;
    private AIType aiType;

    @XmlElement
    public String getFirstPlayer() {
        return firstPlayer;
    }

    @XmlElement
    public String getSecondPlayer() {
        return secondPlayer;
    }

    @XmlElement
    public AIType getAiType() {
        return aiType;
    }
}
