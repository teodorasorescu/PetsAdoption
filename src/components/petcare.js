import React from "react";
import styles from "../styling/petcare.module.scss";
import petcare from "../media/petcare.png";
import logo from "../media/logo.png";

const PetCare = () => {
    return (
      <div className={styles.container}>
        <div className={styles.donateContainer}>
          <div className={styles.text}>   
          <h1 >Benefits of having a pet</h1>  
           <img src = {petcare} alt = 'wallpaper'/>
    
           <p><li>They Support Your Mental Health</li>
           There are many times in your life where you will feel alone. Maybe you’re social distancing, you just moved to a new city, you’re going through a break-up, or you recently lost a family member. A pet will be there for you and can provide a stable relationship even when other relationships are unstable.
           A study of 148 college women proved this when it found that those who owned pets had lower 
           loneliness scores on the UCLA Loneliness Scale.  </p>
            
           <p>Pets need constant attention. For instance, dogs always need to be walked, fed, and played with. Even smaller pets like a gecko need constant care: they need food, water, tank cleanings, tank temperature checks, and great care when handling.[3] That’s a lot to attend to!
            Having someone to care for helps your mental state by giving you a sense of responsibility over another life and by making you feel needed and important. Truly, pets rely on us for everything, and that can give your 
            life an added sense of meaning and purpose. </p>
          
          <p><li>They Support Your Physical Health</li>
            Exercise and fitness come to mind first when we think about physical health. This benefit is seen most in dog owners, since dogs are high-energy. They frequently need to go on walks or runs, and if your dog is walking, then so are you.
            Routine exercise can be hard for non-dog owners to commit to. However, as soon as you adopt a dog, you have another life who is
            depending on you to establish and maintain that routine. </p>
          <p>Pet owners have less cardiovascular problems and lower blood pressure. This could be a result of more exercise, higher emotional support in the face of stress, or a combination of both.
            A recent study by Washington State University[6] found that students who were able to pet an animal for just ten minutes significantly reduced the production of the stress hormone cortisol. Imagine how much you could reduce stress if
            you had an animal nearby all the time! </p>
            <p><li>They Provide Social Support</li>
            Pets provide social support by being our best friends. A lot of people feel that they can relate to their pets, and even have similar personalities. For instance, more active people may adopt energetic dogs, and the bond between them is often quite strong. 
            Pets also provide social support by helping you meet new friends. For instance, talking about your pet can be a great icebreaker when you’re meeting new neighbors, classmates, or coworkers. In my own experience, people love hearing about your pets and seeing pictures, too! If the person you’re sharing with also has a pet, you automatically have something in common that
             can help foster a new friendship. </p>
             <p><li>They Offer Unconditional Love</li>
             If you have a pet, you know what true love is. They care about you no matter who you are or what you’ve done, and you will always matter to them. Even if you feel unstable in your human relationships, you will never have to question the security of your relationship with your pet.

              Even if you have a quieter pet like a gecko or mouse, you can be certain that they love you just as much as a bouncy dog or cuddly cat does. They may show it in different ways, but that doesn’t make it any less real. 

              Pets are also an example of how to love better. If we showed the same empathy and compassion to everyone that our pets show us, then the world would be a much happier place. Not only that, but the world would also be a whole lot better if we loved everyone to the same degree that our pets love us. 
              </p>
              <img width = '400px' src = {logo} alt = 'logo'/>
            
          </div>
        </div>
      </div>
    );
  };
export default PetCare;
  
