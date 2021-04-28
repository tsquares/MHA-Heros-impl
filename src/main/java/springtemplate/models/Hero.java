package springtemplate.models;

import java.time.LocalDate;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "heros")
public class Hero {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String firstName;
  private String lastName;
  private String username;
  private String password;
  private String email;
  private LocalDate dateOfBirth;
  private String bloodType;
  
  @Enumerated(EnumType.STRING)
  private Affiliation affiliation;
  
  public Integer getId() {
    return id;
  }
  
  public void setId(Integer id) {
    this.id = id;
  }
  
  public String getFirstName() {
    return firstName;
  }
  
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  
  public String getLastName() {
    return lastName;
  }
  
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
  
  public String getUsername() {
    return username;
  }
  
  public void setUsername(String username) {
    this.username = username;
  }
  
  public String getPassword() {
    return password;
  }
  
  public void setPassword(String password) {
    this.password = password;
  }
  
  public String getEmail() {
    return email;
  }
  
  public void setEmail(String email) {
    this.email = email;
  }
  
  public LocalDate getDateOfBirth() {
    return dateOfBirth;
  }
  
  public void setDateOfBirth(LocalDate dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }
  
  public String getBloodType() {
    return bloodType;
  }
  
  public void setBloodType(String bloodType) {
    this.bloodType = bloodType;
  }
  
  public Affiliation getAffiliation() {
    return affiliation;
  }
  
  public void setAffiliation(Affiliation affiliation) {
    this.affiliation = affiliation;
  }
  
  public Hero(String firstName, String lastName, String username, String password,
      String email, LocalDate dateOfBirth, String bloodType, Affiliation affiliation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.bloodType = bloodType;
    this.affiliation = affiliation;
  }
  
  public Hero() {
  }
}
