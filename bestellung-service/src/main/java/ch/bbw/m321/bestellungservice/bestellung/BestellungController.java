package ch.bbw.m321.bestellungservice.bestellung;

import ch.bbw.m321.bestellungservice.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("bestellung")
public class BestellungController {

    @Autowired
    private BestellungRepository bestellungRepository;

    @PostMapping("/create")
    public Bestellung createBestellung(@RequestBody Bestellung bestellung) {
        // Implement the logic to create a new Bestellung
        return bestellungRepository.save(bestellung);
    }

    @GetMapping("/getAll")
    public List<Bestellung> getAllBestellungen() {
        // Implement the logic to retrieve all Bestellungen
        return bestellungRepository.findAll();
    }

    @GetMapping("/{id}")
    public Bestellung getBestellungById(@PathVariable Long id) {
        // Implement the logic to retrieve a Bestellung by its ID
        return bestellungRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bestellung not found with id " + id));
    }

    @PutMapping("/{id}")
    public Bestellung updateBestellung(@PathVariable Long id, @RequestBody Bestellung bestellungDetails) {
        // Implement the logic to update an existing Bestellung
        Bestellung bestellung = bestellungRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bestellung not found with id " + id));

        bestellung.setCustomerId(bestellungDetails.getCustomerId());
        bestellung.setOrderDate(bestellungDetails.getOrderDate());
        bestellung.setOrderStatus(bestellungDetails.getOrderStatus());
        bestellung.setOrderItems(bestellungDetails.getOrderItems());

        return bestellungRepository.save(bestellung);
    }

    @DeleteMapping("/{id}")
    public void deleteBestellung(@PathVariable Long id) {
        // Implement the logic to delete a Bestellung
        Bestellung bestellung = bestellungRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bestellung not found with id " + id));

        bestellungRepository.delete(bestellung);
    }
}