package com.vladooha.data.entities.courses;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(
        name = "metatag_tag",
        uniqueConstraints=
            @UniqueConstraint(columnNames={"metatag_id", "tag_id"}))
@Data
public class MetatagTag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "metatag_id")
    private Metatag metatag;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private CourseTag tag;

    private int weight;
}
