function beat(){
    return `
    <style>
      #shape {
          animation-name: beat;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
      }
      @keyframes beat {
          0%{
              transform: scale(1);
          }

          50% {
              transform: scale(0.85);
          }

          100% {
              transform: scale(1);
          }
      }
  </style>
  `
}

module.exports=beat