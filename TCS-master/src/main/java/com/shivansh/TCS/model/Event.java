package com.shivansh.TCS.model;

import jakarta.persistence.*;
import java.util.*;

@Entity
@Table(name = "events")
public class Event {

    // attributes: id (Long), date (Date), time (Time), numPeople (Integer),
    // duration (Integer), importance (Integer), people (many to many: List<User>),
    // rooms (many to many: List<Room>)

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "event_id")
    private Long id;

    @Column(name = "event_datetime", nullable = false)
    private Date dateTime;

    @Column(name = "num_people", nullable = false)
    private Integer numPeople;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Column(name = "importance", nullable = false)
    private Integer importance;

    @ManyToMany(mappedBy = "events")
    List<User> people;

    @ManyToMany(mappedBy = "events")
    List<Room> rooms;

    // constructors

    public Event() {
    }

    public Event(Integer numPeople, Integer duration, Integer importance) {
        this.dateTime = new Date();
        this.numPeople = numPeople;
        this.duration = duration;
        this.importance = importance;
    }

    // getters and setters

    public Long getId() {
        return id;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public Integer getNumPeople() {
        return numPeople;
    }

    public Integer getDuration() {
        return duration;
    }

    public Integer getImportance() {
        return importance;
    }

    public void setNumPeople(Integer numPeople) {
        this.numPeople = numPeople;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setImportance(Integer importance) {
        this.importance = importance;
    }

    public List<User> getPeople() {
        return people;
    }

    public void setPeople(List<User> people) {
        this.people = people;
    }

    public void addUser(User user) {
        people.add(user);
        user.getEvents().add(this);
    }

    public void removeUser(User user) {
        people.remove(user);
        user.getEvents().remove(this);
    }

    public void removeUsers() {
        for (User user : people) {
            user.getEvents().remove(this);
        }
        people.clear();
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

    public void setRoom(Room room) {
        this.rooms.add(room);
        room.getEvents().add(this);
    }

    public void removeRoom(Room room) {
        this.rooms.remove(room);
        room.getEvents().remove(this);
    }

    public void removeRooms() {
        for (Room room : rooms) {
            room.getEvents().remove(this);
        }
        rooms.clear();
    }
}
