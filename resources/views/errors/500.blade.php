@extends('web.layout.error')

@section('content')

    <section id="error_page" class="error_page">
        <div class="container">
            <div class="row">
                <div class="col-md-12 error_block">
                    <span class="t_red">5</span>
                    <span class="t_blue_light">0</span>
                    <span class="t_green_light_light">0</span>

                    <h2>500 Service Temporarily Unavailable</h2>
                </div>
            </div>
        </div>
    </section>

@endsection

@section('footer.script')
    @parent


@endsection