package ch.bbw.m321.produktkatalogservice.produktkatalog.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ProductDto {
    private Long id;
    private String name;
    private String description;
    private Long price;
}
