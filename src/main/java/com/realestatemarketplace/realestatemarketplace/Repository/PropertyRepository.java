package com.realestatemarketplace.realestatemarketplace.Repository;

import com.realestatemarketplace.realestatemarketplace.Model.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}
