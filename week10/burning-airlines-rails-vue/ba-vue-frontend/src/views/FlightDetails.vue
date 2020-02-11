<template>
  <div>
    <!-- better: {{flight.airplane && flight.airplane.name}} -->
    <h1>Flight ID: {{ flight.flight_number }} ({{flight.airplane.name}})</h1>

    <div class="seating" v-if="flight.airplane">
      <div class="planeRow" v-for="row in flight.airplane.rows">
        {{ row }}
        <div class="seat"
             v-bind:class="seatStatus(row, col)"
             v-for="col in flight.airplane.cols">

          {{ col | toSeatLetter | }}
        </div><!-- seat -->
        {{ row }}
      </div><!-- planeRow -->
    </div> <!-- seating -->
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'FlightDetails',
    props: ['id'],  // comes from the router,
    data() {
      return {
        flight: {}
      };
    },
    mounted() {
      // Load the details for this flight ID
      axios.get(`http://localhost:3000/flights/${this.id}`)
        .then(res => this.flight = res.data)
        .catch(err => console.log(err));
    },
    methods: {
      seatStatus(row, col) {
        // Loop over the reservations for this flight, and return an 'occupied' class name
        // if we find this row + col as a reservation; otherwise return 'free'
        // return Math.random() > 0.5 ? 'occupied' : 'free';
        let found = false;
        this.flight.reservations.forEach( r => {
          if (r.row === row && r.col === col) {
            found = true;
          }
        });
        return found ? 'occupied' : 'free';
      }
    },
    // Filters are like Rails template helpers, intended just for transforming text in your template
    filters: {
      toSeatLetter(num) {
        return String.fromCharCode(64 + num);
      }
    }
  }
</script>

<style scoped>
  .seat {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #CCC;
    line-height: 40px;
    text-align: center;
    /* margin-right: 6px;
    margin-bottom: 6px; */
    margin: 3px;
  }

  .occupied {
    background-color: grey;
    pointer-events: none;  /* Ignore clicks on occupied seats! */
  }

  .free {

  }
</style>
