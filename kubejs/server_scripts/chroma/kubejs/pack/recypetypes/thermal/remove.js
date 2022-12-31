// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      'thermal:machine_frame',
      'thermal:energy_cell_frame',
      'thermal:fluid_cell_frame'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
