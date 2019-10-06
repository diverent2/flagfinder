/*
generates the API needed for [slug].pages
*/

import flags from '../../data/_flags.js';

const lookup = new Map();
flags.forEach(flag => {
  lookup.set(flag.id, JSON.stringify(flag));
});

export function get(req, res, next) {
  // created from file name [id].svelte
  const { id } = req.params;

  // handle results
  if (lookup.has(id)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(lookup.get(id));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
