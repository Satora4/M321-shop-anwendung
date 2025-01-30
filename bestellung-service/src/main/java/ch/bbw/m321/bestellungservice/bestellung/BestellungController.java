package ch.bbw.m321.bestellungservice.bestellung;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("bestellung")
public class BestellungController {
    // TODO: Implementieren:

    @GetMapping("getAll")
    public MyData getBestellung() {
        return new MyData("Bewertung: Super Gut");
    }

    record MyData(String bestellung) {};
}
