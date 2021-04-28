package springtemplate.models;

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
  private Integer heroId;
  
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
  
  public Integer getHeroId() {
    return heroId;
  }
  
  public void setHeroId(Integer heroId) {
    this.heroId = heroId;
  }
}
