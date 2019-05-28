package com.vladooha.data.entities.courses;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "metatag")
@Data
public class Metatag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String name;

    @OneToMany(mappedBy = "metatag", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    private Set<MetatagTag> metatagTags = new HashSet<>();
}
