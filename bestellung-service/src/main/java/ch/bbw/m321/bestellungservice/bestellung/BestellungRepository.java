package ch.bbw.m321.bestellungservice.bestellung;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BestellungRepository extends JpaRepository<Bestellung, Long> {
}