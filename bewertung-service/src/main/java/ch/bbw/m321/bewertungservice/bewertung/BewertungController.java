package ch.bbw.m321.bewertungservice.bewertung;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("bewertung")
public class BewertungController {
    // TODO: MongoDB einbinden -> www.mongodb.com/de-de

    @GetMapping("getAll")
    public MyData getBewertung() {
        return new MyData("Gute Bewertung");
    }

    record MyData(String bewertung) {}
}
