package ch.bbw.m321.produktkatalogservice.produktkatalog;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}