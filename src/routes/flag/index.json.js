import flags from '../../data/_flags.js';

const contents = JSON.stringify(
  flags.map(flag => {
    return {
      name: flag.name,
      id: flag.id
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
