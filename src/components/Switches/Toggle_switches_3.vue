<template>

<div>
  <input type="checkbox" class="plus-minus">
</div>


  
</template>

<script setup>

</script>

<style scoped>
.plus-minus {
  --primary: #1E2235;
  --secondary: #FAFBFF;
  --duration: .5s;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 240px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: 4px solid var(--primary);
  background-size: 300% 300%;
  transition: transform 0.3s;
  transform: scale(var(--scale, 1)) translateZ(0);
  -webkit-animation: var(--name, unchecked) var(--duration) ease forwards;
  animation: var(--name, unchecked) var(--duration) ease forwards;
}

.plus-minus:before, .plus-minus:after {
  content: "";
  position: absolute;
  width: 16px;
  height: var(--height, 16px);
  left: 6px;
  top: var(--top, 6px);
  background: var(--background, var(--primary));
  -webkit-animation: var(--name-icon-b, var(--name-icon, unchecked-icon)) var(--duration) ease forwards;
  animation: var(--name-icon-b, var(--name-icon, unchecked-icon)) var(--duration) ease forwards;
}

.plus-minus:before {
  -webkit-clip-path: polygon(0 6px, 6px 6px, 6px 0, 10px 0, 10px 6px, 16px 6px, 16px 10px, 10px 10px, 10px 16px, 6px 16px, 6px 10px, 0 10px);
  clip-path: polygon(0 6px, 6px 6px, 6px 0, 10px 0, 10px 6px, 16px 6px, 16px 10px, 10px 10px, 10px 16px, 6px 16px, 6px 10px, 0 10px);
}

.plus-minus:after {
  --height: 4px;
  --top: 12px;
  --background: var(--secondary);
  --name-icon-b: var(--name-icon-a, checked-icon);
}

.plus-minus:active {
  --scale: .95;
}

.plus-minus:checked {
  --name: checked;
  --name-icon-b: checked-icon;
  --name-icon-a: unchecked-icon;
}

@keyframes checked-icon {
  from {
    transform: translateZ(12px);
  }

  to {
    transform: translateX(16px) rotateY(90deg) translateZ(12px);
  }
}

@keyframes unchecked-icon {
  from {
    transform: translateX(-16px) rotateY(-90deg) translateZ(12px);
  }

  to {
    transform: translateZ(12px);
  }
}

@keyframes checked {
  from {
    background-image: radial-gradient(ellipse at center, var(--primary) 0%, var(--primary) 25%, var(--secondary) 25.1%, var(--secondary) 100%);
    background-position: 100% 50%;
  }

  to {
    background-image: radial-gradient(ellipse at center, var(--primary) 0%, var(--primary) 25%, var(--secondary) 25.1%, var(--secondary) 100%);
    background-position: 50% 50%;
  }
}

@keyframes unchecked {
  from {
    background-image: radial-gradient(ellipse at center, var(--secondary) 0%, var(--secondary) 25%, var(--primary) 25.1%, var(--primary) 100%);
    background-position: 100% 50%;
  }

  to {
    background-image: radial-gradient(ellipse at center, var(--secondary) 0%, var(--secondary) 25%, var(--primary) 25.1%, var(--primary) 100%);
    background-position: 50% 50%;
  }
}

</style>