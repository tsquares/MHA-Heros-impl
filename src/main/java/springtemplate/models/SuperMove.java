package springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name = "super_moves")
public class SuperMove {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private String description;
  private String effectArea;
  private String primaryUse;
  private Integer heroId;
  private Integer quirkId;
  
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
  
  public String getEffectArea() { return effectArea; }
  
  public void setEffectArea(String effectArea) { this.effectArea = effectArea; }
  
  public String getPrimaryUse() {
    return primaryUse;
  }
  
  public void setPrimaryUse(String primaryUse) {
    this.primaryUse = primaryUse;
  }
  
  public Integer getHeroId() { return heroId; }
  
  public void setHeroId(Integer heroId) {
    this.heroId = heroId;
  }
  
  public Integer getQuirkId() {
    return quirkId;
  }
  
  public void setQuirkId(Integer quirkId) {
    this.quirkId = quirkId;
  }
}
