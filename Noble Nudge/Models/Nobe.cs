using System;
using System.Collections.Generic;

namespace Noble_Nudge.Models;

public partial class Nobe
{
    public int NobeId { get; set; }

    public string? NobeName { get; set; }

    public string? Category { get; set; }

    public int? Points { get; set; }

    public byte[]? Icon { get; set; }
}
