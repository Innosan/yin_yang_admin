<script>
	export let id, createdAt, user, orderItems
</script>

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h1>Order #{id}</h1>
			<p>Created at: {createdAt}</p>
			<p>{user.first_name} {user.last_name}</p>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{#each orderItems as orderItem}
						<tr>
							<td>{orderItem.product_id.title}</td>
							<td>x</td>
							<td>{orderItem.quantity}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
