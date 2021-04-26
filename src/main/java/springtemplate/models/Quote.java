package springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name = "quotes")
public class Quote {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String text;
  private Boolean favorite;
  private Integer upvotes;
  
  @ManyToOne
  @JsonIgnore
  private Hero hero;
  
  public Integer getId() {
    return id;
  }
  
  public void setId(Integer id) {
    this.id = id;
  }
  
  public String getText() {
    return text;
  }
  
  public void setText(String text) {
    this.text = text;
  }
  
  public Boolean getFavorite() {
    return favorite;
  }
  
  public void setFavorite(Boolean favorite) {
    this.favorite = favorite;
  }
  
  public Integer getUpvotes() {
    return upvotes;
  }
  
  public void setUpvotes(Integer upvotes) {
    this.upvotes = upvotes;
  }
  
  public Hero getHero() {
    return hero;
  }
  
  public void setHero(Hero hero) {
    this.hero = hero;
  }
}
