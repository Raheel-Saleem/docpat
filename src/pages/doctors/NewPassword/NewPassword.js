import React from "react";

export default function NewPassword() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label>Old Password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="form-group">
          <label>New Password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="submit-section">
          <button type="submit" class="btn btn-primary submit-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
