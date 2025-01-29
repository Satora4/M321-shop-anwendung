package ch.bbw.m321.produktkatalogservice.produktkatalog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProduktKatalogController {
    private ProduktKatalogService produktKatalogService;
    // TODO: Postgres DB einbinden -> https://www.ovhcloud.com/de/public-cloud/postgresql/?at_medium=display&at_platform=google&at_campaign=AdWords&at_creation=int_ovh_de_pmax_enterprise_baremetal_offensive()&at_variant=&at_detail_placement=&gad_source=1&gclid=Cj0KCQiAx9q6BhCDARIsACwUxu7muzSTiIbP6c444cl7UMsF_QfXG0OphpJQkueikuN3doVymFvzBkMaAnnREALw_wcB

    @GetMapping("api")
    public MyData getProduktKatalog() {
        return new MyData("Joel Vontobel");
    }

    record MyData(String name) {};
}
