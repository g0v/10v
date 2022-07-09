# ldfolder

folder dynamics.

## Usage

include required js and css file, then:

    # initialization
    folder = new ldfolder({root: '<root-of-some-ldfd-tree>'});

    # manually toggle 'some-subnode' on.
    folder.toggle('some-subnode', true);


## Constructor Options

 - `root`: DOM root for this ldfolder.
 - `exclusive`: only one folder can be opened at a time if set to true.
   - default false.

## Sample ldfd structure

    .ldfd
      .ldfd-item
      .ldfd
        .ldfd-item.ldfd-toggle
        .ldfd-menu
          .ldfd-item
          .ldfd-item

## Customization

custom highlight style by overwritting `.ldfolder.highlight` and `.ldfolder.active` style.


## License

MIT
