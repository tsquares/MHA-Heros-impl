package springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name = "super_moves")
public class SuperMove {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private String description;
  private String range;
  private String usage;
  
  @ManyToOne
  @JsonIgnore
  private Hero hero;
  
  @ManyToOne
  @JsonIgnore
  private Quirk quirk;
  
  public Integer getId() {
    return id;
  }
  
  public void setId(Integer id) {
    this.id = id;
  }
  
  public String getName() {
    return name;
  }
  
  public void setName(String name) {
    this.name = name;
  }
  
  public String getDescription() {
    return description;
  }
  
  public void setDescription(String description) {
    this.description = description;
  }
  
  public String getRange() { return range; }
  
  public void setRange(String range) { this.range = range; }
  
  public String getUsage() {
    return usage;
  }
  
  public void setUsage(String usage) {
    this.usage = usage;
  }
  
  public Hero getHero() { return hero; }
  
  public void setHero(Hero hero) {
    this.hero = hero;
  }
  
  public Quirk getQuirk() {
    return quirk;
  }
  
  public void setQuirk(Quirk quirk) {
    this.quirk = quirk;
  }
}
