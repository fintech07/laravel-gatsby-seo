@extends('web.layout.error')

@section('content')

<div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">503</span>
                <div class="mb-4 lead">The Server Temporarily Unavailable.</div>
                <p id="timelog" class="lead">Please try after <span id="timer">120</span> seconds</p>
                <a id="trynow" href="https://www.lost-art.com/" class="btn btn-link"> Retry </a>
            </div>
        </div>
    </div>
</div>

    <style>
        body {
            background: #dedede;
        }
        .page-wrap {
            min-height: 100vh;
        }
    </style>
    <script>
        function startTimer(duration, timer, timelog, trynow) {
            var count = duration, seconds;
            var counter = setInterval(function () {
                timer.textContent = count;
                if (--count < 0) {
                clearInterval(counter);
                timelog.style.display = "none";
                trynow.style.display = "block";
                }
            }, 1000);
        }

        window.onload = function () {
            timer = document.querySelector('#timer');
            timelog = document.querySelector('#timelog');
            trynow = document.querySelector('#trynow');
            trynow.style.display="none";
            
            startTimer(120, timer, timelog, trynow);
        };
    </script>
@endsection

@section('footer.script')
    @parent


@endsection