package com.realestatemarketplace.realestatemarketplace.Controller;

import com.realestatemarketplace.realestatemarketplace.Model.Property;
import com.realestatemarketplace.realestatemarketplace.Repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {
    @Autowired
    private PropertyRepository propertyRepository;

    @GetMapping("/api/properties")
    public List<Property> getProperties() {
        return propertyRepository.findAll();
    }
}
