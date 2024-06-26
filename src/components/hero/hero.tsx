import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../media/su27-2-transparent.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} alt="Image thunder" />
      <h1>
      <span class="highlight">Welcome</span> to <span class="highlight">my world</span>
        <br />
      <span class="highlight">Explore</span> what I <span class="highlight">create</span>
      </h1>
      <div class={styles["button-group"]}>
        {/*Youtube Button*/}
        <button
          class={styles["youtube-button"]}
          onClick$={async (evt) => {
            // Get button position
            const buttonRect = evt.target.getBoundingClientRect();

            // Calculate position relative to the viewport
            const x = buttonRect.left + buttonRect.width / 2;
            const y = buttonRect.top + buttonRect.height / 2;

            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
              origin: {
                x: x / window.innerWidth, // Convert to relative position
                y: y / window.innerHeight, // Convert to relative position
              },
            };

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function shoot() {
              confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
              });

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);

            // Open website in new tab after animation
            setTimeout(() => {
              window.open("https://www.youtube.com/@G9AEROSPACEYT", "_blank");
            }, 990); // Adjust the delay time as needed
          }}
        >
          Youtube
        </button>
        {/*BuyMeaCoffee Button*/}
        <button
          class={styles["bmc-button"]}
          onClick$={async (evt) => {
            // Get button position
            const buttonRect = evt.target.getBoundingClientRect();

            // Calculate position relative to the viewport
            const x = buttonRect.left + buttonRect.width / 2;
            const y = buttonRect.top + buttonRect.height / 2;

            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
              origin: {
                x: x / window.innerWidth, // Convert to relative position
                y: y / window.innerHeight, // Convert to relative position
              },
            };

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function shoot() {
              confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
              });

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);

            // Open website in new tab after animation
            setTimeout(() => {
              window.open("https://buymeacoffee.com/g9aerospace", "_blank");
            }, 990); // Adjust the delay time as needed
          }}
        >
          Buy me a jet!
        </button>
      </div>
    </div>
  );
});
