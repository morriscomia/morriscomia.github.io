// Bar and Bubble charts
    // 1. Create the trace for the bubble chart.    
    var bubbleData = [{
      x: ids,
      y: bubbleValues,
      text: bubbleLabels,
      mode: "markers",
       marker: {
         size: bubbleValues,
         color: ids,
         colorscale: "Earth" 
       }
    }];

    // 2. Create the layout for the bubble chart.    
    var bubbleLayout = {
      title: {text: "<b> Bacteria Cultures Per Sample </b>"},
      xaxis: {title: "OTU ID"},
      automargin: true,
      hovermode: "closest"
  };

  // 3. Use Plotly to plot the data with the layout.
  Plotly.newPlot("bubble", bubbleData, bubbleLayout);
