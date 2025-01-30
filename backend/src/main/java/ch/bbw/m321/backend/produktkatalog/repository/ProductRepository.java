package ch.bbw.m321.backend.produktkatalog.repository;

import ch.bbw.m321.backend.produktkatalog.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
