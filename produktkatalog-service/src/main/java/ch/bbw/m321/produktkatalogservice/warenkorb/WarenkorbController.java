package ch.bbw.m321.produktkatalogservice.warenkorb;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("warenkorb")
public class WarenkorbController {
    // TODO: redis einbinden -> https://redis.io/

    @GetMapping("getAll")
    public MyData getWarenkorb() {
        return new MyData("Chips");
    }

    record MyData(String product) {};
}
